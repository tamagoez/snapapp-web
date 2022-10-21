import Image from "next/image"

export default function ErrorFHF() {
return <><style jsx>{`html {
    height: 100%;
    background-color: #f6f6f6;
}
Image {
    margin : 0 auto;
    width: 100%;
}
}`}</style><Image src="/404.png" width="1920" height="1080" quality={80} /></>
}