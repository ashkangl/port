import "./globals.css";
import Footer from "@/Components/footer";
import { dir } from "i18next";
import { languages } from "../i18n/setting";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const lng = params.lng

  const meta = {
    title: "",
    description: "",
    keywords: "",
  }
  if(lng === 'fa'){
    meta.title = "اشکان گلزاد - برنامه نویس و طراح وب سایت";
    meta.description = "من برنامه نویس و طراح وبسایت هستم. شما می توانید نمونه کارها و رزومه من را در این سایت مشاهده کنید. برای مشاوره و سفارش سایت برای کسب و کارتان با من در ارتباط باشید.";
    meta.keywords = "طراح وب,طراح سایت,طراحی سایت,برنامه نویسی وب,برنامه نویسی وب سایت,طراحی وب ایران,برنامه نویسی وب ایران"
  }else if(lng === 'en'){
    meta.title = "Ashkan Golzad - Website Developer & Designer";
    meta.description = "I am a website developer and designer. You can see my sample works and resume in this website. If you need help or want to order website for your business, you can contact me in contact part.";
    meta.keywords = "Website Developer,Website Designer,Web Developer,Web Designer,Website Designer Freelancer,Website Developer Freelancer,Web Developer Freelancer,Freelancer"
  }else{
    meta.title = "Ashkan Golzad - مطور ويب",
    meta.description = "أنا مطور ويب. كمطور مواقع ويب، أحب إنشاء مواقع جميلة ووظيفية لعملاء مختلفين."
    meta.keywords = "مطور ويب,تصميم ويب,تصميم ويب ایران,تصميم ويب ایران,تصميم ويب ایران,تصميم ويب ایران"
  }

  return{
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords
  }
}


export default function RootLayout({ children ,params: {lng} }) {
  
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
      {children}
      <Footer/>
      </body>
    </html>
  );
}

//title: "اشکان گلزاد - برنامه نویس و طراح سایت | Ashkan Golzad - website developer" ,
//description: "I am a website developer. I have experience in using different web technologies, such as Node JS, Next JS, React JS, HTML, CSS, Javascript and WordPress. I am expert in both backend and frontend. You can communicate me in contact part. | من برنامه نویس سایت هستم. شما می توانید با من برای مشاوره و سفارش ارتباط برقرار کنید.",
//keywords: "Ashkan Golzad, Ashkan, Golzad, اشکان گلزاد, برنامه نویسی وبسایت, طراحی وبسایت",
