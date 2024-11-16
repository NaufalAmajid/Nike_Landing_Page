import { star } from "../assets/icons"

const ReviewCard = (prompt) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={prompt.imgURL} alt={prompt.customerName}
                className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="mt-6 max-w-sm text-center info-text">{prompt.feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2">
                <img
                    src={star}
                    alt="star"
                    width={24} height={24}
                    className="object-contain m-0"
                />
                <p className="text-xl font-montserrat text-slate-gray">({prompt.rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{prompt.customerName}</h3>
        </div>
    )
}

export default ReviewCard