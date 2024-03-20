import { Editar } from '../../../../components/dashboard/tour/editar/Editar'

export default function Page({params}) {
    
    return (
        <Editar id={params?.id} />
    );
}