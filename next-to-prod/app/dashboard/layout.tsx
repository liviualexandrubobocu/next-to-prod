'use client';

import Modal from '@/components/modal';
import CreateTeam from '@/domains/team/components/CreateTeam';
import React, { useState } from 'react';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section>
        {/* Include shared UI here e.g. a header or sidebar */}
            <div className="flex">
                <aside className="w-64" aria-label="Sidebar">
                {/* Sidebar content here */}
                <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                    <button className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsModalOpen(true)}>
                        Create Team
                    </button>
                    </li>
                    <li>
                    <button className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        Create Project
                    </button>
                    </li>
                </ul>
                </div>
            </aside>
            <main className="flex-1">
                {/* Main content goes here */}
                {children}
            </main>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CreateTeam onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    </section>
  )
}