import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

export async function getServerSideProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'student.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const studentData = JSON.parse(jsonData);
  const student = studentData[params.id] || null;

  return {
    props: { student }
  };
}

export default function StudentProfile({ student }) {
  const router = useRouter();
  const { id } = router.query;

  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
      <img src={student.image} alt={student.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Date of Birth:</strong> {student.dob}</p>
      <p><strong>Courses:</strong> {student.courses.join(', ')}</p>
      <h2 className="text-xl font-semibold mt-4">Syllabus Covered</h2>
      <ul className="list-disc ml-5">
        {student.syllabus.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Marksheet</h2>
      <img src={student.marksheet} alt="Marksheet" className="w-full mt-2" />
    </div>
  );
}
