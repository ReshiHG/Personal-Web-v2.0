// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

interface Props {
  sectionId: string;
}

export function SectionContact({ sectionId }: Props) {
  // Para el envio del formulario
  const [state, handleSubmit, reset] = useForm("xbjwvkng");
  // Estado local para controlar el modal (evita que se cierre al hacer reset)
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (state.succeeded && !showModal) {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    reset(); // Limpia el formulario y resetea el estado de Formspree
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="h-22.5 bg-[url(/src/assets/divisor-negro-arriba.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-negro-arriba-desk.png)]"></div>

      <section id={sectionId} className="-mt-16 h-screen pt-16">
        <div className="h-full bg-[url(/src/assets/fondo-contacto-naranja-mobile.jpg)] bg-cover bg-center lg:bg-[url(/src/assets/fondo-contacto-naranja-desktop.jpg)]">
          <h2 className="bg-jr-negro-a-700 p-8 text-center font-Noto text-3xl text-white">
            Contacto
          </h2>
          <div className="container mx-auto mt-12.5 flex max-w-7xl items-center justify-center p-8">
            <form
              className="flex w-3/4 max-w-120 min-w-80 flex-col gap-4 rounded-2xl bg-jr-blanco-100/25 p-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-medium text-white"
                  htmlFor="email"
                >
                  E-mail:
                </label>
                <input
                  className="rounded-xl border bg-jr-blanco-100/70 px-3 py-1.5 text-sm"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="correo@dominio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                className="rounded-xl border px-3 py-1.5 text-sm"
                id="subject"
                type="subject"
                name="subject"
                value="Contacto mediante web personal"
                hidden
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-medium text-white"
                  htmlFor="message"
                >
                  Mensaje:
                </label>
                <textarea
                  className="min-h-80 rounded-xl border bg-jr-blanco-100/70 px-3 py-2.5 text-sm"
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje aquí."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                className="cursor-pointer rounded-2xl border-2 border-jr-logo-naranja-500 bg-jr-logo-naranja-500 px-4 py-1.5 text-base font-medium text-white transition duration-200 hover:scale-105"
                type="submit"
                disabled={state.submitting}
              >
                ENVIAR
              </button>
            </form>
          </div>

          {/* MODAL (se muestra solo si showModal es true) */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
              <div className="w-full max-w-md rounded-2xl bg-jr-blanco-100 p-6 text-center shadow-2xl">
                <h3 className="text-2xl font-bold text-jr-naranja-500">
                  ¡Mensaje enviado exitosamente!
                </h3>
                <p className="mt-2 text-gray-700">
                  Gracias por contactarme. Te responderé lo antes posible.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-6 cursor-pointer rounded-xl bg-jr-logo-naranja-500 px-6 py-2 font-semibold text-white transition hover:scale-105"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
