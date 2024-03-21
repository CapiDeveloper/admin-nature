import { CiMoneyBill } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";

export const PagoVendedor = ({ pagos = [] }) => {
    return (
        <>
            {
                pagos?.map((pago, index) => (
                    <div key={index} className="border-[1px] rounded-lg p-2">
                        <p className="flex items-center gap-2">
                            <MdOutlineDateRange size={30} />
                            <span>{pago?.mes}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <CiMoneyBill size={30} />
                            <span>{pago?._sum?.cantidad} $</span>
                        </p>
                    </div>
                ))
            }
        </>
    )
}
