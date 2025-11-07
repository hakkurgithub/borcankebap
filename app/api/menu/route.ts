import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { MenuItem } from '../../../lib/menuData';

const MENU_FILE_PATH = path.join(process.cwd(), 'lib', 'menuData.ts');

export async function POST(request: NextRequest) {
  try {
    const { menuItems }: { menuItems: MenuItem[] } = await request.json();

    if (!Array.isArray(menuItems)) {
      return NextResponse.json(
        { error: 'Invalid menu data format' },
        { status: 400 }
      );
    }

    // MenuData.ts dosyasının yeni içeriğini oluştur
    const fileContent = generateMenuDataFileContent(menuItems);

    // Dosyayı güncelle
    fs.writeFileSync(MENU_FILE_PATH, fileContent, 'utf-8');

    return NextResponse.json({ 
      success: true, 
      message: 'Menu data updated successfully',
      itemCount: menuItems.length 
    });

  } catch (error) {
    console.error('Error updating menu data:', error);
    return NextResponse.json(
      { error: 'Failed to update menu data' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      message: 'Menu data API is working' 
    });

  } catch (error) {
    console.error('Error reading menu data:', error);
    return NextResponse.json(
      { error: 'Failed to read menu data' },
      { status: 500 }
    );
  }
}

function generateMenuDataFileContent(menuItems: MenuItem[]): string {
  const menuItemsJson = JSON.stringify(menuItems, null, 2);

  return `// lib/menuData.ts
export type MenuCategory =
  | "Kebaplar & Izgaralar"
  | "Pide & Lahmacun"
  | "Döner"
  | "Dürüm"
  | "Çorbalar"
  | "Yan Ürünler"
  | "Tatlılar"
  | "İçecekler";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: MenuCategory;
  image?: string;
  rating: number;
}

// 👇 Admin panelden güncellenen menü verileri
export const MENU_ITEMS: MenuItem[] = ${menuItemsJson};
`;
}