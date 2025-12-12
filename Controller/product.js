import Product from "../model/product.js";


const getAllProduct = async (req, res) => {
  const { company, name, sort, select } = req.query;
  const queryobj = {};
  if (company) {
    queryobj.company = company;
  }
  if (name) {
    queryobj.name = { $regex: name, $options: "i" };
  }
  let api = Product.find(queryobj);
  if (sort) {
    let sortFix = sort.replace(",", " ");
    api = api.sort(sortFix);
  }
  if (select) {
    const fields = select.split(",").join(" ");
    api = api.select(fields);
  }
  const myData = await api;
  res.status(200).json({ myData });
};


export default getAllProduct;
