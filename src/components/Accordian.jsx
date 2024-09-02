import  { useState } from 'react';
import PropTypes from "prop-types"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Accordian({options=[]}) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        {
            options.map((option,index)=>
        <AccordionItem key={`${option.title}-${index}`}>
          <AccordionHeader targetId={index}>{option.title}</AccordionHeader>
          <AccordionBody accordionId={index}>
            {option.description}
          </AccordionBody>
        </AccordionItem>)
}
        </Accordion>
    </div>
  );
}

export default Accordian;

Accordian.propTypes=
{
  options:PropTypes.array
}