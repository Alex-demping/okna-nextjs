"use client";

import CallbackForm from "@/app/components/callbackForm/CallbackForm";
import Modal from "@/app/components/modal/Modal";
import { useTranslations } from "next-intl";
import { createContext, useContext, useState } from "react";


type ModalType = "callback" | "measurement" | null;

type ModalContextType = {
    modal: ModalType;
    openModal: (modal: Exclude<ModalType, null>) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [modal, setModal] = useState<ModalType>(null);
    const t = useTranslations("callbackForm");
    const openModal = (modal: Exclude<ModalType, null>) => {
        setModal(modal);
    };

    const closeModal = () => {
        setModal(null);
    };

    return (
        <ModalContext.Provider
            value={{
                modal,
                openModal,
                closeModal,
            }}
        >
            {children}

            <Modal
                title={t("title")}
                isOpen={modal === "callback"}
                onClose={closeModal}
            >
                <CallbackForm />
            </Modal>
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used inside ModalProvider");
    }

    return context;
}