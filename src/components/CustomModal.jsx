import Modal from 'react-bootstrap/Modal';
import { Pie, XAxis, Legend, LineChart, Line, ResponsiveContainer, PieChart, Tooltip, Cell } from 'recharts';

const CustomModal = ({ modalHeading, modalBody, showModal, setShowModal, toggleLight, pieData, barData }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <Modal
      size="lg"
      show={showModal}
      data-bs-theme={toggleLight === "light" ? "light" : "dark"}
      onHide={() => setShowModal(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{ color: toggleLight === "light" ? "black" : "white" }}
        >
          {modalHeading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ color: toggleLight === "light" ? "black" : "white" }}
      >
        <h2>
          Lines of Code: {modalBody}
        </h2><br />
        <h2>
          Languages Used
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <h2>
          Commits Over Time
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={150} height={40} data={barData}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;