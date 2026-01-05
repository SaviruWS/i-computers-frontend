import { useState } from "react"

export default function adminAddProductsPage(){
    
    const[productId,setProductId]=useState("");
    const[name,setName]=useState("");
    const[description,setDescription]=useState("");
    const[altNames,setAltNames]=useState("");
     const[price,setPrice]=useState("");
     const[labelledPrice,setLabelledPrice]=useState("");
     const[category,setCategory]=useState("Others");
     const[brand,setBrand]=useState("Standard");
    const[model,setModel]=useState("");
    const[isVisible,setIsVisible]=useState(true);

    return(
        <div className="w-full h-full  max-h-full flex flex-wrap items-start">
            <div className="w-[50%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Product Id</label>
                 <input value={productId} onChange={(e)=>{setProductId(e.target.value)}}
                   placeholder="Ex:ID001" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            <div className="w-[50%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Product Name</label>
                 <input value={name} onChange={(e)=>{setName(e.target.value)}}
                  placeholder="Ex:Laptop" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            <div className="w-full h-[100] flex flex-col">
                 <label className="text-xl font-bold ml-2">Description</label>
      <textarea  value={description}   onChange={(e)=>{setDescription(e.target.value)}}
                 placeholder="Ex:Laptop" className="border-4 border-accent rounded-[10px] h-[100px] p-2 m-2 focus:outline-white"/>
            </div>
            <div className="w-[100%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Alternative names(Comma Separated)</label>
                 <input  value={altNames} onChange={(e)=>{setAltNames(e.target.value)}}
                  placeholder="Ex:Laptop" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
             <div className="w-[50%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Price</label>
                 <input value={price}onChange={(e)=>{setPrice(e.target.value)}} type="number"
                   placeholder="60000" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            <div className="w-[50%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Labelled Price</label>
                 <input value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}} type="number"
                  placeholder="60000" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            <div className="w-[25%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Categories</label>
               <select value={category} onChange={(e)=>{setCategory(e.target.value)}} 
                  placeholder="" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white">
                    <option value="Others">Others</option>
                    <option value="Others">Laptops</option>
                    <option value="Others">Desktops</option>
                    <option value="Others">Components</option>
                    <option value="Others">Accessories</option>
                    <option value="Others">Peripherals</option>
                  </select>
            </div>
            <div className="w-[25%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Brand</label>
               <select value={brand} onChange={(e)=>{setBrand(e.target.value)}} 
                  placeholder="" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white">
                     <option value="Generic">Generic</option>
                    <option value="Dell">Dell</option>
                    <option value="Asus">Asus</option>
                    <option value="Hp">Hp</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Apple">Apple</option>
                  </select>
            </div>
            <div className="w-[25%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Model</label>
               <input value={model} onChange={(e)=>{setModel(e.target.value)}} 
                  placeholder="Ex:Inspiron 15" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white">
                </input>
            </div>
             <div className="w-[25%] h-[120px] flex flex-col">
                 <label className="text-xl font-bold ml-2">Is Visible</label>
               <select value={isVisible} onChange={(e)=>{setIsVisible(e.target.value)}} 
                  placeholder="Ex:Inspiron 15" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white">
                    <option value={true}>Yes</option>
                     <option value={false}>No</option>
                </select>
            </div>

        </div>
    )
}