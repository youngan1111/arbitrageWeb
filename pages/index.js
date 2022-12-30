import Header from "../components/Header"
import Image from "next/image"
import logo from "../public/hy.png"

export default function Home() {
  return (
    <>
      <Header />
      <Image
        src={logo}
        alt="hanyang logo"
        width={300}
        height={300}
        priority
        style={{ marginLeft: "100px", marginTop: "50px" }}
      />
      <span>Project #1 수강신청</span>
    </>
  )
}
