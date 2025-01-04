import styled from "styled-components";
import CloseButton from "./closeButton";
import { motion } from "motion/react";

const BookingFormContainer = styled(motion.div)`
  width: 400px;
  height: 500px;
  background: #f3f2ec;
  margin: 10px;
  flex: 0 0 100px;
  position: fixed;
  bottom: 10px;
  right: 30px;
  border-radius: 10px;
  z-index: 1000;
  border: 1px solid #2f5f48;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    right: 10px;
    width: 300px;
    height: 400px;
    margin: 0px;
  }
`;

const FormBG = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  top: 0;
  left: 0;
  z-index: 999;
`;

export default function BookingForm({setFormOpen, formOpen}) {
  return (
    <>
      <BookingFormContainer
        layout
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.2 },
        }}
      >
        <CloseButton triggerFunction={setFormOpen} triggerState={formOpen} />
      </BookingFormContainer>
      <FormBG onClick={() => setFormOpen(!formOpen)} />
    </>
  );
}
