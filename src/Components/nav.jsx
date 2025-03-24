"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/app/i18n/client";


export default function Navigation({lng}) {

	const { t } = useTranslation(lng)
	const ref = useRef(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
			const observer = new IntersectionObserver(([entry]) =>
				setIntersecting(entry.isIntersecting),
			);

			observer.observe(ref.current);
			return () => observer.disconnect();
	},[])
	return (
		<header ref={ref} dir="ltr">
				<div
					className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
						isIntersecting
							? "bg-zinc-900/0 border-transparent"
							: "bg-zinc-900/500  border-zinc-800 "
					}`}
				>
					<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
						<div className="flex justify-between gap-8">
							<Link
								href={`/${lng}/resume`}
								className="duration-200 text-zinc-200 hover:text-zinc-300"
							>
								{lng === "en" ? 
								<h6 className="font-['ubu']">{t('Resume')}</h6>
								:""}
								{lng === "es" ? 
								<h6 >{t('Resume')}</h6>
								:""}
								{lng === "fa" || lng === "ar" ? 
								<h6 className="font-['far']">{t('Resume')}</h6>
								:""}
							</Link>

							<Link
								href={`/${lng}/contact`}
								className="duration-200 text-zinc-200 hover:text-zinc-300"
							>
								{lng === "en" ? 
								<h6 className="font-['ubu']">{t('Contact')}</h6>
								:""}
								{lng === "es" ? 
								<h6 >{t('Contact')}</h6>
								:""}
								{lng === "fa" || lng === "ar" ? 
								<h6 className="font-['far']">{t('Contact')}</h6>
								:""}
							</Link>			
							
							<Link
								href={`/${lng}/order`}
								className="duration-200 text-zinc-200 hover:text-zinc-300"
							>
								{lng === "en" ? 
								<h6 className="font-['ubu']">{t('Order')}</h6>
								:""}
								{lng === "es" ? 
								<h6 >{t('Order')}</h6>
								:""}
								{lng === "fa" || lng === "ar" ? 
								<h6 className="font-['far']">{t('Order')}</h6>
								:""}
							</Link>			
						</div>

						<Link
							href={`/${lng}`}
							className="duration-200 text-zinc-300 hover:text-zinc-300"
						>
							<ArrowLeft className="w-6 h-6 " />
						</Link>
					</div>
				</div>
			</header>
	)
}