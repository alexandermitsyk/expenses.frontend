import ExpenseList from '../components/ExpenseList';
import StaticticsPreview from '../components/StaticticsPreview';

const HomePage = ({ show, setShow }) => (
    <div>
        <StaticticsPreview />
        <ExpenseList show={show} setShow={setShow} />
    </div>
);

export default HomePage;
