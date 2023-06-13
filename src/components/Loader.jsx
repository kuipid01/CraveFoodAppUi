
import styles from './Loader.module.css'; // Import the CSS file
const Loader = () => {
  return (
    <div className="flex justify-center bg-transparent text-white items-center h-fit py-20 ">
      <div className={styles.loader}>
        <div className={styles['loader-inner']}>
            <div className='w-[50px] h-[50px] border border-white'>

            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Loader