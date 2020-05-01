import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// Original method
const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

// Static method
Summary.winsAnalysisWithHtmlReport("Man United");
