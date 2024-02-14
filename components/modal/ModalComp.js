
import { useState } from 'react';
import { Button, Modal } from 'antd';
import FormOrder from '../form/formOrder/FormOrder';


const ModalComp = ({ isModalOpen, setIsModalOpen, title = 'Заказать', ur }) => {
	//   const [isModalOpen, setIsModalOpen] = useState(false);
	//   const showModal = () => {
	//     setIsModalOpen(true);
	//   };
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<Modal title={title} open={isModalOpen} footer={false} onCancel={handleCancel}>
				<FormOrder handleCancel={handleCancel} ur={ur} />
			</Modal>
		</>
	);
};
export default ModalComp;