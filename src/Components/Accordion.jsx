import { React, useContext } from "react";
import AccordionItem from "./AccordionItem";
import Car from "../ClassComponents/CarComponent";
import Bus from "../PropsComponent/BusComponent";
import GetRequest from "../HttpRequests/GetPeopleListSync";
import ValidationForm from "../Validation/ValidationForm";
import { useSelector } from "react-redux";
import {ProductContext} from '../Store/Context/ProductsContext';

const Accordion = (props) => {
  const counterVal = useSelector((state) => state.counter.counterVal);
  const productContextVal = useContext(ProductContext);
  const products = productContextVal.products;

  return (
    <div class="accordion" id="accordionExample">
      <AccordionItem headerText="Class Component Example">
        <Car />
      </AccordionItem>
      <AccordionItem headerText="Props Example">
        <Bus name="Props Bus" />
      </AccordionItem>
      <AccordionItem headerText="Synchronous Request Example">
        <GetRequest />
      </AccordionItem>
      <AccordionItem headerText="Form Validation Example">
        <ValidationForm />
      </AccordionItem>
      <AccordionItem headerText="Use Selector Example">
        <div>
          <span className="badge rounded-pill text-bg-success">
            <span style={{ color: "black" }}>
              Redux Example Counter Value:
              <strong style={{ color: "red" }}> {counterVal} </strong>
            </span>
          </span>
        </div>
      </AccordionItem>
      <AccordionItem headerText="Products from Context">
        <div className="card" style={{ width: "25rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-6">Product Name</div>
                <div className="col-md-3">Price</div>
              </div>
            </li>
            {products.map((product) => {
              return (
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-6">{product.name}</div>
                    <div className="col-md-3">{product.price}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
