import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutBannerSkeleton = () => {
    return (
        <div>
            <div className="flex flex-col w-full h-[30rem] justify-center items-center bg-gray-100 px-4">
                <Skeleton height={400} width={250} className="mb-4" />
                <Skeleton height={200} width={300} count={2} />
            </div>
        
        </div>
    )
}

export default AboutBannerSkeleton;

// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const AboutBannerImageSkeleton = () => {
//     return (
//         <div className="grid md:grid-cols-4 gap-4">
//             {Array.from({ length: 4 }).map((_, index) => {
//                 <div
//                   key={index}
//                   className="rounded-lg shadow-lg px-2 py-2 flex flex-col items-center text-center bg-gray-300"
//                 >
//                     {/* Skeleton loader for image */}
//                     <Skeleton height={288} width="100%" className='mb-4' />

//                     {/* Skeleton loader for title */}
//                     <Skeleton height={20} width="80%" className='mb-2' />

//                     {/* Skeleton loader for description */}
//                     <Skeleton height={15} width="60%" />
//                 </div>
//             })}
//         </div>
//     );
// }

// export default AboutBannerImageSkeleton;