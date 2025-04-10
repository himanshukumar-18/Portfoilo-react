
const HireFrom = () => {
    return (
        <>
            <form className="from flex flex-col gap-8">
                <input className="outline-0 outline-[#4242463c] outline-2 rounded-[5px] p-[10px] w-[80%] text-[.9rem]" type="text" placeholder="Your Name*" required />


                <input className="outline-0 outline-[#4242463c] outline-2 rounded-[5px] p-[10px] w-[80%] text-[.9rem]" type="text" placeholder="Your Email*" required />


                <input className="outline-0 outline-[#4242463c] outline-2 rounded-[5px] p-[10px] w-[80%] text-[.9rem]" type="text" placeholder="Write a subject" required />


                <textarea className="w-[80%] outline-[#4242463c] outline-2 rounded-[5px] px-[10px] py-[20px]  text-[.9rem]" placeholder="Write a masseage" name="" id=""></textarea>

            </form>
        </>
    )
}

export default HireFrom