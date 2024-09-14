import { Typography } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, } from "react-router-dom";

const EditM = ({ match }) => {
    const { drugId } = useParams();
   
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [storebox, setStorebox] = useState('');
    const [sellprice, setSellPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [company, setCompany] = useState('');
    const [effects, setEffects] = useState('');
    const [exdate, setExDate] = useState('');
  
    useEffect(() => {
      // Fetch the inventory details based on the drugId from the URL parameter
      const fetchInventoryDetails = async () => {
        try {
          const response = await axios.get(`/api/inventory/drug/${drugId}`);
          const inventoryItem = response.data;
          setDrugId(inventoryItem.drugId);
          setName(inventoryItem.name);
          setCategory(inventoryItem.category);
          setStorebox(inventoryItem.storebox);
          setSellPrice(inventoryItem.sellprice);
          setQuantity(inventoryItem.quantity);
          setCompany(inventoryItem.company);
          setEffects(inventoryItem.effects);
          setExDate(inventoryItem.exdate);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchInventoryDetails();
    }, [match.params.drugId]);
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      const updatedInventory = {
        drugId,
        name,
        category,
        storebox,
        sellprice,
        quantity,
        company,
        effects,
        exdate,
      };
  
      try {
        await axios.put(`/api/inventory/update/${drugId}`, updatedInventory);
        // Redirect or show a success message
      } catch (error) {
        console.log(error);
      }
    };

return(

    <div>
    <center>
      <Typography.Title level={1}>Edit Medicine</Typography.Title>
    </center>
    <br />
    <div className="mask d-flex align-items-center h-100">
      <div className="container">
        <form className="row g-3" onSubmit={handleFormSubmit}
        >
          <div className="col-md-6 mb-4">
            <label htmlFor="drugId" className="form-label">
              Drug ID
            </label>
            <input
              type="number"
              className="form-control"
              id="drugId"
              value={drugId}
              required
              onChange={(e) => {
                setDrugId(e.target.value);
              }}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="name" className="form-label">
              Drug Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-control"
              id="category"
              value={category}
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="Select">Select</option>
              <option value="Analgesics">Analgesics</option>
              <option value="Antacids">Antacids</option>
              <option value="Antipyretics">Antipyretics</option>
              <option value="Antivirals">Antivirals</option>
              <option value="Barbiturates">Barbiturates</option>
              <option value="Cytotoxics">Cytotoxics</option>
              <option value="Diuretics">Diuretics</option>
              <option value="Hormones">Hormones</option>
              <option value="Laxatives">Laxatives</option>
            </select>
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="storebox" className="form-label">
              Store Box
            </label>
            <select
              className="form-control"
              id="storebox"
              value={storebox}
              required
              onChange={(e) => {
                setStorebox(e.target.value);
              }}
            >
              <option value="Select">Select</option>
              <option value="Box - A1">Box - A1</option>
              <option value="Box - A2">Box - A2</option>
              <option value="Box - B1">Box - B1</option>
              <option value="Box - B2">Box - B2</option>
              <option value="Box - C1">Box - C1</option>
              <option value="Box - C2">Box - C2</option>
              <option value="Box - D1">Box - D1</option>
              <option value="Box - D2">Box - D2</option>
            </select>
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="sellprice" className="form-label">
              Selling Price
            </label>
            <input
              type="number"
              className="form-control"
              id="sellprice"
              value={sellprice}
              required
              onChange={(e) => {
                setSellprice(e.target.value);
              }}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              required
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <select
              className="form-control"
              id="company"
              value={company}
              required
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            >
              <option value="Select">Select</option>
              <option value="Johnson & Johnson">Johnson & Johnson</option>
              <option value="Pfizer">Pfizer</option>
              <option value="Merck & Co.">Merck & Co.</option>
              <option value="GlaxoSmithKline">GlaxoSmithKline</option>
              <option value="Takeda">Takeda</option>
              <option value="Shanghai Pharmaceuticals Holding">
                Shanghai Pharmaceuticals Holding
              </option>
              <option value="AbbVie">AbbVie</option>
              <option value="Sanofi">Sanofi</option>
              <option value="Novartis">Novartis</option>
            </select>
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="effects" className="form-label">
              Effects
            </label>
            <select
              className="form-control"
              id="effects"
              value={effects}
              required
              onChange={(e) => {
                setEffects(e.target.value);
              }}
            >
              <option value="Select">Select</option>
              <option value="headache">headache</option>
              <option value="muscle pain">muscle pain</option>
              <option value="chills">chills</option>
              <option value="Rash">Rash</option>
              <option value="Hives">Hives</option>
              <option value="vomiting">vomiting</option>
              <option value="dizziness">dizziness</option>
              <option value="weight gain">weight gain</option>
            </select>
          </div>

          <div className="button-container">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

);


};


export default EditM;
