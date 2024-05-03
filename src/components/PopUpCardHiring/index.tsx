import { useEffect, useRef, useState } from "react"
import * as S from "./styles"
import formatPrice from "../../helpers/formatPrice"

interface PopUpCardHiringProps {
  open: boolean,
  onClose?: () => void,
  labor: {
    company: string,
    hourlyRate: number
  }
}

export default function PopUpCardHiring({ labor, open, onClose = () => { } }: PopUpCardHiringProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [hourlyRate, setHourlyRate] = useState<number | null>(null)
  const [orderAnalysis, setOrderAnalysis] = useState("")
  const paypalContainerRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    const handleClick = (ev: MouseEvent) => {
      if (!cardRef.current?.contains(ev.target as Node)) {
        onClose()
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick)
      document.body.style.overflow = "hidden"
    } else {
      document.removeEventListener("mousedown", handleClick)
      document.body.style.overflow = "auto"
    }
    return () => document.removeEventListener("mousedown", handleClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const handleSimulateBudget = () => {
    if (!orderAnalysis) return
    setOrderAnalysis("")
    setHourlyRate((Math.floor(Math.random() * 24) + 1))
  }

  const handleAcceptService = () => {
    if (hourlyRate === null) return
    const script = document.createElement("script")
    const clientId = "ARbQvmOO6kvtHclh8C788KIcdp7NJCwHGcGBaecaScfr5EoymHsI0BTrUHSIIK1o1GyO7rb1QbGsAhId"
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${clientId}`

    script.addEventListener("load", () => {

      const laodButtonsAndLogicAboutPayment = () => {
        const service = {
          price: hourlyRate * labor.hourlyRate,
          description: `Serviço da empresa "${labor.company}"`
        }
        setTimeout(() => {
          const paypalContainer = document.createElement("div")
          paypalContainer.id = "paypal-content"

          paypalContainerRef.current?.appendChild(paypalContainer);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unexpected-multiline
          (window as any).paypal.Buttons({

            // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unexpected-multiline
            createOrder: (_: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    descripton: service.description,
                    amount: {
                      currency_code: "BRL",
                      value: service.price
                    }
                  }
                ]
              })
            },

            onApprove: async () => {
              // const order = await actions.order.capture()
              window.alert("Pagamento Realizado com sucesso!")
              setHourlyRate(null)
              onClose()
            }
          }).render("#paypal-content")
        })
      }
      laodButtonsAndLogicAboutPayment()
    })

    document.body.appendChild(script)

  }

  return open ? (
    <S.PopUpCardHiring>
      <div className="card" ref={cardRef}>
        <h2>Contratação dos serviços de <span>{labor.company}</span></h2>
        <div className="order-analysis">
          <label htmlFor="order-analysis-textarea">Descrição do serviço:</label>
          <textarea value={orderAnalysis} onChange={ev => setOrderAnalysis(ev.target.value)} id="order-analysis-textarea" />
          <button disabled={!orderAnalysis} onClick={handleSimulateBudget}>Simular orçamento</button>
        </div>
        {
          hourlyRate !== null && (
            <div className="service-status">
              <h3 className="status"><span>{formatPrice(hourlyRate * labor.hourlyRate)}</span> para <span>{hourlyRate} horas</span> de serviço </h3>
              <button onClick={handleAcceptService}>Aceitar Orçamento</button>
              <div className="paypal-container" ref={paypalContainerRef}>
                <div id="paypal-content"></div>
              </div>
            </div>
          )
        }
      </div>
    </S.PopUpCardHiring>
  ) : <></>
}