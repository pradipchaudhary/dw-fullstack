import { Product } from "../schema/model.js";

export const createProductService = async (req) => {
    return await Product.create(req.body);
};

// export const readAllProductService = async () => {
//     return await Product.find({});
// };
/**
export const readAllProductService = async () => {
    * === Select ===
         return await Product.find({});
         return await Product.find({ name: "table" });
         return await Product.find({ name: "table" }).select("name price -_id"); // show only select field
         return await Product.find({ name: "table" }).select("-_id -price"); // not show select field
         * === Sort ===
         return await Product.find({}).sort("name"); //assending sort
         return await Product.find({}).sort("-name"); //desending sort
   
     
     * sort("name") => sort according to name (ascending)
     * sort("-name") => sort according to name (descending)
     * sort("name age") => first sort according to name(ascending) and those object whose name a are same sor the according to age (ascending)
     * sort("name -age") => first sort according to name(ascending) and those object whose name a are same sor the according to age (descending)
     * unlike javascript sort work for number sorting
     
    

     * === Limit ===
     return Product.find({}).limit("1");
     => limit("2") here 2 is the maximum number of object to show

     * === Skip ===
     return Product.find({});
    return Product.find({}).skip("2");
     => skip("2") => here 2 is the number of object to skip

     * Order of operation => ( find, sort, select, skip, limit )
};

 */

export const readAllProductService = async (req) => {
    const query = req.query;
    console.log(query);
    // return await Product.find({});
    // {{url}}/product?name=Wireless
    return await Product.find(query);
};

export const readSpecificProductService = async (req) => {
    return await Product.findById(req.params.id);
};
export const updateSpecificProductService = async (req) => {
    return await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
};
export const deleteSpecificProductService = async (req) => {
    return await Product.findByIdAndDelete(req.params.id);
};
