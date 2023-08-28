import CodeBox from './CodeBox';

type ExerciseCardProps = {
  title: string;
  QuestionCode: string;
  AnswerCode: string;
};

export default function ExerciseCard({ title, QuestionCode, AnswerCode }: ExerciseCardProps) {
  return (
    <li>
      <h4>{title}</h4>
      <CodeBox code={QuestionCode} />
      <details>
        <summary>해설</summary>
        <CodeBox code={AnswerCode} />
      </details>
    </li>
  );
}
