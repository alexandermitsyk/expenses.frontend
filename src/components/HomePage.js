import ExpenseList from './ExpenseList';
import StaticticsPreview from './StaticticsPreview';
import { ToastContainer } from 'react-toastify';

const HomePage = ({ show, setShow }) => (
    <div>
        <ToastContainer />
        <StaticticsPreview />
        <ExpenseList show={show} setShow={setShow} />
    </div>
);

export default HomePage;
