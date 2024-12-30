import React from 'react'
import RepoItem from './RepoItem';

function RepoList({ repos }) {
  // Handle the case where repos might be undefined or null
  if (!repos || repos.length === 0) {
    return (
      <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl my-4 font-bold card-title text-white">
            Latest Repositories
          </h2>
          <p className="text-white">No repositories available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title text-white">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
