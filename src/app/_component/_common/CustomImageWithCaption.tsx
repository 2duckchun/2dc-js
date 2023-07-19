import Image from 'next/image';

export default function CustomImageWithCaption({imageSrc, width, height, alt, caption, paddingValue, borderRadiusValue}) {
    return (
        <div style={{width: width, minHeight: height, padding: paddingValue, backgroundColor: "#e5e8eb", borderRadius: borderRadiusValue}}>
            <div style={{margin: "0px auto", width: "100%", height: "100%",  position: "relative"}}>
                <Image style={{width: "100%", height: "100%", objectFit: "cover"}} src={imageSrc} alt={alt} />
            </div>
            <p style={{margin: "0px auto 5px", textAlign: "center", color:"#000"}}>{caption}</p>
        </div>
    )
}