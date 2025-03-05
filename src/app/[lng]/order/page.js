import { useTranslation } from "@/app/i18n"
import PriceEn from "@/Components/Order/eng"
import PriceEs from "@/Components/Order/esp"
import PriceFa from "@/Components/Order/far"
import PriceAr from "@/Components/Order/ara"
import Navigation from "@/Components/nav"

const Order = async ({params:{lng}}) => {

    const { t } = await useTranslation(lng)

    return(
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation lng = {lng} />
        <div className="container flex items-center md:mt-20 sm:mt-0 pb-10 justify-center h-full px-4 mx-auto">
        {lng === 'en' ?
            <PriceEn /> : ""
        }

        {lng === 'fa' ?
            <PriceFa /> : ""
        }

        {lng === 'es' ?
            <PriceEs /> : ""
        }

        {lng === 'ar' ?
            <PriceAr /> : ""
        }
        </div>
        </div>

        
    )
}

export default Order