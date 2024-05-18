import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { CreateUserDto } from '../definitions';

type ModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ isModalOpen, closeModal }: ModalProps) => {
  const [formData, setFormData] = useState({firstName: "",lastName: "", email: "", gender: "", shortDescription: ""});

  if (isModalOpen !== true) {
    return null;
  }

  const clearForm = () => {
    setFormData({firstName: "",lastName: "", email: "", gender: "", shortDescription: ""});
  }

  const createUser = async (userData: CreateUserDto) => {
    try {
      const response = await fetch(
          `http://localhost:3030/users`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        closeModal();
        clearForm();
      } catch (err) {
      }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = () => {
    createUser(formData);
  };

 return (
  <section className="modal">
    <article className="modal-content p-lg-4">
      <div className='modal-header'>
        <h5 className="modal-title">New user</h5>
        <div className="exit-icon text-end">
          <IoMdClose onClick={closeModal} />
        </div>
        <hr />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="shortDescription">Description:</label>
          <input type="text" id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange}/>
        </div>
        <button type="submit" className="modal-button">Submit</button>
      </form>
     </article>
   </section>
 );
};

export default Modal;
