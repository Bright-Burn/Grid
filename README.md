# Grid

# Структура

`apps/*` - директория для стендов
`packages/*` - директория для исходников проектов

# Установка

## PNPM install
[installation](https://pnpm.io/installation)
Дока [PNPM Workspaces](https://pnpm.io/workspaces)

## Установка зависимостей
`pnpm i`

## git Preehook
- <дополнить>

# Добавление зависимостей пакетов

## В корень(root) проекта:
`pnpm -w add <package_name>`

## варианты для воркспейс:
 - `pnpm --filter <workspace_name> add <package_name>`
 - `pnpm add <package_name>` в директории воркспейса

# Сборка всех pacakges и запуск стенда:
 1. `pnpm build`
 2. `pnpm app dev`

## Запуск одного воркспейс:
`pnpm --filter <workspace_name> <comand_name>`

пример: `pnpm --filter grid build:w`