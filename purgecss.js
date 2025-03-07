const PurgeCSS = require("purgecss").PurgeCSS;
const fs = require("fs");

async function runPurgeCSS() {
  try {
    const purgeCSSResult = await new PurgeCSS().purge({
      content: ["./src/**/*.{html,js}"],
      css: ["*/*.css"],
      rejected: true, // Включаем вывод отклоненных селекторов
      rejectedCss: true, // Включаем вывод отклоненных CSS-правил
    });

    // Логируем результат в консоль
    console.log("purgeCSSResult", purgeCSSResult);

    // Создаем лог-файл для удаленных и оставленных правил
    const logContent = purgeCSSResult
      .map((result) => {
        // Читаем исходный CSS-файл
        const originalCss = fs.readFileSync(result.file, "utf-8");

        // Получаем удаленные CSS-правила
        const removedCss = result.rejectedCss || "";

        // Вычисляем сохраненные CSS-правила
        const keptCss = originalCss
          .split("\n")
          .filter((line) => !removedCss.includes(line.trim()))
          .join("\n");

        return `
File: ${result.file}
Removed Selectors:
${
  result.rejected && result.rejected.length > 0
    ? result.rejected.join("\n")
    : "No selectors removed"
}
Removed CSS:
${removedCss || "No CSS removed"}
Kept CSS:
${keptCss || "All rules kept"}
        `;
      })
      .join("\n");

    // Записываем результат в файл
    fs.writeFileSync("./purgecss-log.txt", logContent, "utf-8");
    console.log("Log file created: purgecss-log.txt");
  } catch (error) {
    console.error("Error during PurgeCSS:", error);
  }
}

runPurgeCSS();
