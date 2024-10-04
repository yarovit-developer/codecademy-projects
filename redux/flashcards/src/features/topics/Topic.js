import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
// Импортируйте ваши селекторы
import { selectTopics } from "../../features/topics/topicsSlice";
import { selectQuizzes } from "../../features/quizzes/quizzesSlice";

export default function Topic() {
  const topics = useSelector(selectTopics);  // Используйте селектор для получения тем
  const quizzes = useSelector(selectQuizzes); // Используйте селектор для получения квизов
  const { topicId } = useParams();
  const topic = topics[topicId];

  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />;
  }

  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
