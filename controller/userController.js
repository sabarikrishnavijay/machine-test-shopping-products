const data= require('../public/javascripts/products')



const getProudct = async (req, res) => {
    console.log('linked');
   // console.log(data);
    res.status(200).json(data)
}


module.exports ={getProudct}