// import Image from "next/image";
// import Link from "next/link";

// function Logo({ location }) {
//   return (
//     <Link href="/" className="m-0 flex items-center">
//       {/* <span>
//         <Image
//           width={45}
//           height={45}
//           src={location === "header" ? "/final.png" : "/final-footer-f.png"}
//           alt="Logo"
//           quality={100}
//         />
//       </span> */}
//       <div className="flex items-center space-x-2">
//         <span className="text-4xl pl-2 font-anton">StackIt</span>
//         <span className="text-sm">
//           {location === "footer" ? " get answers in seconds" : ""}
//         </span>
//       </div>
//     </Link>
//   );
// }

// export default Logo;

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

function Logo({ location }) {
  const isFooter = location === "footer";

  return (
    <Link
      href="/"
      className="flex flex-col items-center justify-center gap-1 text-center"
    >
      <div className="flex items-center gap-2">
        {/* Optional: you can re-enable the image if needed */}
        {/* <Image
          width={45}
          height={45}
          src={isFooter ? "/final-footer-f.png" : "/final.png"}
          alt="Logo"
          quality={100}
        /> */}
        <span
          className={clsx(
            "font-anton tracking-wide",
            isFooter ? "text-3xl text-[--primary]" : "text-4xl text-[--primary]"
          )}
        >
          StackIt
        </span>
      </div>
      {isFooter && (
        <span className="text-sm text-[--accent-gray] italic leading-tight">
          get answers in seconds
        </span>
      )}
    </Link>
  );
}

export default Logo;
