import ExpenseList from './ExpenseList';
import StaticticsPreview from './StaticticsPreview';

const HomePage = ({ show, setShow }) => (
    <div>
        <StaticticsPreview />
        <ExpenseList show={show} setShow={setShow} />
    </div>
);

export default HomePage;
