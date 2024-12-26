import styles from "./Planner.module.css";

const Planner = () => {

    
    return (
        <div className={styles.main_container}>
            <h1>Education Planner</h1>

            <div className={styles.input_container}>
                <input type="text" name="subject" className={styles.subject} placeholder="Write Subject Name" />
                <input type="number" name="hour" className={styles.hour} placeholder="Hour" />
                <button>Add</button>
            </div>
        </div>
    )
}

export default Planner;