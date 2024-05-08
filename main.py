import asyncio
import json

from aiogram import types
from aiogram import Bot, Dispatcher
from aiogram.fsm.context import FSMContext
from aiogram.filters.command import Command
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

bot = Bot(token='7185056493:AAFmSmfJ9NuM8abnCljt1EfyXLrNZN4OozE')
dp = Dispatcher()

@dp.message(Command('start'))
async def start(message: types.Message, state: FSMContext):
    iteml = KeyboardButton(text='Каталог1', web_app=WebAppInfo(url='https://ppblond.github.io/'))
    keyboard = ReplyKeyboardMarkup(keyboard=[[iteml]], resize_keyboard=True)
    await bot.send_message(message.from_user.id, 'Приветики', reply_markup=keyboard, parse_mode='Markdown')

@dp.message()
async def web_app(callback_query):
    json_data = callback_query.web_app_data.data
    parsed_data = json.loads(json_data)
    message = ""
    for i, item in enumerate(parsed_data['items'], start=1):
        position = int(item['id'].replace('item', ''))
        message += f"Позиция {position}\n"
        message += f"Стоимость {item['price']}\n\n"

    message += f"Общая стоимость: {item['price']}\n\n"

    await bot.send_message(callback_query.from_user.id, f"""
{message}
""")
    
    await bot.send_message('-1002063166054', f"""
Новый заказ
{message}
    """)

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
