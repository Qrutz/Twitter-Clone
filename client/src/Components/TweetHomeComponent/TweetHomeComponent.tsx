
import {BsStars, BsEmojiDizzy} from "react-icons/bs";
import {MdPermMedia} from "react-icons/md"
import {AiOutlineFileGif, AiOutlineSchedule} from "react-icons/ai"
import {CgPoll} from "react-icons/cg"
import { useMyData } from '../../requests';




interface Props {
  text:  string,
  // comments: number;
  // retweets: number;
  // likes: number;
  // date: number;

  tweet: (params: any) => any;

  changeText: (params: any) => void;
}

export default function TweetHomeComponent(props: Props) {
  const user = useMyData();

  const avar = user.isLoading ? "" : user.data.avatar;

  return (
    <> 
   
    <div className='flex justify-between h-[4rem]  items-center border-b-2 p-3 sticky top-0 bottom-0 bg-white z-30 h   '>
    
    
    <h1 className='text-3xl font-semibold'>Home</h1>
    <BsStars className=' hover:bg-slate-200 rounded-full cursor-pointer text-3xl p-[4px]' />
    </div>

    <div className='flex flex-col border-b-2'>
  




   
   

   
            <form className='flex p-3 ' onSubmit={props.tweet}>
               
               <div className='md:h-12 rounded-full    text-center font-extralight'> 
                  <img className='rounded-full  w-12 h-12 ' src={avar} alt="profilepci" />
                  </div>
                
                
                <div className='ml-3 flex-col w-full px-4 relative   '>
                    
                    <textarea value={props.text} onChange={props.changeText} className='w-full focus:outline-none ' placeholder='Whats happening'></textarea>

                    <div className='border-t-2 flex justify-between items-center   '>
                      <div className='flex  w-full  text-2xl p-2'>  
                      <MdPermMedia className='ml-2 cursor-pointer' />
                      <AiOutlineFileGif className=" ml-2 cursor-pointer" />
                      <CgPoll className='ml-2 cursor-pointer'/>
                      <BsEmojiDizzy className='ml-2 cursor-pointer' />
                      <AiOutlineSchedule className='ml-2 cursor-pointer' />
                      </div>

                      <button type='submit' className=' h-[2.5rem] w-[6rem] rounded-3xl bg-blue-500 hover:bg-blue-600 text-xl mt-2 text-white mr-3'>Tweet</button>
                    </div>


                </div>
            </form>
    </div>
    </>

  
  )
}
