JScriptCodeDom.CodeParseException: String have line break , Line 1, Char 164 ---> System.Exception: String have line break
   at JScriptCodeDom.CodeReader.ReadString() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Reader.cs:line 1055
   at JScriptCodeDom.CodeReader.ReadToken(Boolean previsexpression) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Reader.cs:line 699
   at JScriptCodeDom.CodeReader.PeekToken(Boolean previsexpression) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Reader.cs:line 562
   at JScriptCodeDom.CodeParser.SkipBlanksAndPeek(Boolean previsexp) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 119
   at JScriptCodeDom.CodeParser.ParseCommaSplitedCollection() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 734
   at JScriptCodeDom.CodeParser.ParseBracketArrayExpression() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 807
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 638
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 522
   at JScriptCodeDom.CodeParser.ParseFullExpression(Boolean bthrowerror, Boolean allowcommer) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 699
   at JScriptCodeDom.CodeParser.ParseVarStatement() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 926
   at JScriptCodeDom.CodeParser.InternalParseStatementCore() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 248
   at JScriptCodeDom.CodeParser.InternalParseStatement() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 175
   at JScriptCodeDom.CodeParser.ParseStatement() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 73
   at JScriptCodeDom.CodeParser.ParseBlock() in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 63
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 24
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 36
   at JScriptCodeDom.CodeParser.Parse(String code) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\JScriptProtectorV2\Parser.cs:line 13
   at ProtectorV1.Protect(String[] codes) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\ProtectorV1.cs:line 85
   at ProtectorV1.Protect(String code) in c:\inetpub\wwwroot\javascriptobfuscator.com\App_Code\ProtectorV1.cs:line 74
   at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e) in c:\inetpub\wwwroot\javascriptobfuscator.com\Javascript-Obfuscator.aspx:line 74