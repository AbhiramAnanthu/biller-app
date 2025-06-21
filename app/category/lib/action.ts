'use server'

import { auth0 } from '@/lib/auth0';
import { CategorySchema, TagSchema } from '@/lib/zod-schema';
import { prisma } from '@/prisma/prisma';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function createCategory(name: string, tags: Array<String>) {
    try {
        const session = await auth0.getSession();
        if (!session) redirect('/')
        const ownerid = session.user.sub;

        const newCategory = await prisma.category.create({ data: CategorySchema.parse({ name: name, ownerid: ownerid }) })
        const parsedTags = tags.map((item, index) => TagSchema.parse({ name: item, categoryId: newCategory.id }))
        const newTags = await prisma.tag.createMany({ data: parsedTags })

        console.log(newTags, newCategory);
        redirect('/');
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
}

