'use client';

import React from 'react';
import { useForm } from 'react-hook-form';


// Define the form's data structure
interface IFormInput {
  teamName: string;
}

const CreateTeam: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name</label>
      <input
        {...register("teamName", { required: true })}
        type="text"
        id="teamName"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      {errors.teamName && <span>This field is required</span>}

      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Create Team
      </button>
    </form>
  );
};

export default CreateTeam;
