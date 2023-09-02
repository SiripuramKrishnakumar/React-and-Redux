import React from "react";

const AccordionItem = (props) => {
  const id = Math.random();
  const elementIdWithHash = `#collapse${id}`;
  const elementId = `collapse${id}`;

  return (
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={elementIdWithHash}
          aria-expanded="true"
          aria-controls={elementId}
        >
          {props.headerText}
        </button>
      </h2>
      <div
        id={elementId}
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">{props.children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
