const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if(process.env.NODE_ENV === 'production'){
	require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();
const PORT = process.env.PORT || 5000

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname,'client/build')));

	app.get('*',function(req,res){
		res.sendFile(path.join(__dirname,'client/build','index.html'))
	});
}

app.listen(PORT,error => {
	if (error) throw error;
	console.log("server running on port "+PORT); 
})

app.post('/payment',function(req,res){
	const body = {
		source:req.body.token.id,
		amount:req.body.amount,
		currency:'USD'
	}

	stripe.charges.create(body,(stripeErr,stripeResp) => {
		if(stripeErr){
			res.status(500).send({error:stripeErr});
		}else{
			res.status(200).send({success:stripeResp});
		}
	});
});

app.get('/hello',function(req,res){
	res.status(200).send({res:"hello"});
})