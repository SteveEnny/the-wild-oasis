import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button sizes="medium">Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form" onClose="">
          <CreateCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens="table">
        <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}

// export function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new carbin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
