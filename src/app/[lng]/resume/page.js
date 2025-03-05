import React from 'react'
import Navigation from '@/Components/nav'
import { useTranslation } from '@/app/i18n'
import Farsi from '@/Components/Resume/farsi'
import Spanish from '@/Components/Resume/spanish'
import English from '@/Components/Resume/english'
import Arabic from '@/Components/Resume/arabic'

const page = async({params:{lng}}) => {

	const { t } = await useTranslation(lng)
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation lng = {lng} />
			<div className="container flex items-center md:mt-20 pb-10 justify-center min-h-screen px-4 mx-auto">
					{lng === "fa" ?
					<Farsi />
					: ""}

					{lng === "ar" ?
					<Arabic />
					:""}

					{lng === "en" ?
					<English />
					:""}

					{lng === "es" ?
					<Spanish />
					:""}
				</div>
		</div>
  )
}

export default page
