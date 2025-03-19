def common_end(a, b):
    return True if a[0] == b[0] or a[-1] == b[-1] else False

# Тестовый вызов
print(common_end([1, 2, 3], [7, 3]))  # Должно вывести: True
print(common_end([1, 2, 3], [7, 8]))  # Должно вывести: False
