import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

export default function BtnAction() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div className="grid grid-cols-2 gap-1 product-card-main-hot">
                <div className="card-actions">
                    <button className="btn btn-accent text-white w-full text-xs">mua ngay</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-secondary text-white w-full">thêm giỏ hàng</button>
                </div>
            </div>
            <div className="card-actions pt-2">
                <button onClick={() => setOpenModal(true)} className="btn btn-info text-white w-full">so sánh</button>
            </div>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <ModalHeader>Terms of Service</ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}