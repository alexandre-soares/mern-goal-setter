import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

import { FaTrashAlt } from "react-icons/fa";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <span className="goal__text">{goal.text}</span>
      <span className={`goal__priority ${goal.priority.toLowerCase()}`}>
        {goal.priority}
      </span>
      <span className="goal__date">
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </span>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default GoalItem;