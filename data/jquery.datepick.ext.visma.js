/* http://keith-wood.name/datepick.html
   Datepicker extensions for jQuery v4.0.4.
   Written by Keith Wood (kbwood{at}iinet.com.au) August 2009.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */

(function($) {

    var vismaThemeRenderer = {
        picker: '<div{popup:start} id="vismaDatePickerDiv"{popup:end} class="vismaDatePicker ' +
        'ui-helper-clearfix{inline:start} ui-datepicker-inline{inline:end}">' +
        '{months}' +
        '</div>',
        monthRow: '{months}',
        month: '<div class="vismaDatePickerHeader ui-helper-clearfix">{link:prev}<div class="align-month-year">{monthHeader:MM yyyy}</div>{link:next}</div>' +
        '<div class="vismaDatePickerCalendar"><table class="vismaDatePickerCalendar"><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table>' +
        '<div class="vismaDatePickerFooter ui-helper-clearfix">{link:today}{link:clear}</div></div>',
        weekHeader: '<tr>{days}</tr>',
        dayHeader: '<th>{day}</th>',
        week: '<tr>{days}</tr>',
        day: '<td>{day}</td>',
        monthSelector: '.ui-datepicker-group',
        daySelector: 'td',
        rtlClass: 'ui-datepicker-rtl',
        multiClass: 'ui-datepicker-multi',
        defaultClass: 'vismaDatePickerDays',
        selectedClass: 'vismaDatePickerActive',
        highlightedClass: 'vismaDatePickerHover',
        todayClass: 'vismaDatePickerHighlight',
        otherMonthClass: 'vismaDatePickerOtherMonth',
        weekendClass: 'vismaDatePickerWeekend',
        commandClass: 'vismaDatePickerCmd',
        commandButtonClass: 'vismaDatePickerBtn',
        commandLinkClass: '',
        disabledClass: 'vismaDatePickerDisabled',
    };

    $.extend($.datepick, {
        // visma theme template for generating a datepicker.
        vismaThemeRenderer: vismaThemeRenderer,
        /*allow only the last day of the month to be selectable*/
        onlyLastDay:function(date){
            d = new Date(date);
            return{
                selectable : Date.equals(date,d.moveToLastDayOfMonth())
                }
        }
    });
	
})(jQuery);

jQuery(document).ready(function(){
    var datepickDefaults = {
        showOnFocus: false,
        showTrigger: '<input type="button" aria-hidden="true" tabindex="-1"></input>',
        renderer: $.datepick.vismaThemeRenderer,
        showOtherMonths: true,
        selectOtherMonths: true,
		alignment: 'bottomRight', // Alignment of popup - with nominated corner of input:
			// 'top' or 'bottom' aligns depending on language direction,
			// 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
        prevText: '',
        nextText: '',
        yearRange: 'c-5:c+5',
        constrainInput:true,
		monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dateFormat:'dd/mm/yyyy',
		clearText: 'Cancel', // Text for the clear command
        showSpeed: 50
    };
    
    // Starsoft spesific
    var ssMonthNames, ssWeekDays, ssWeekDaysShort, cancelText, todayText;
    
    // fi, en and sv locals for months
    // fi, en and sv locals for weekdays
    // fi, en and sv locals for cancel and today -buttons
    switch (document.documentElement ? document.documentElement.lang : '') {
        case 'sv': 
            ssMonthNames = ["Jan", "Febr", "Mars", "April", "Maj", "Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Dec"];
            ssWeekDays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
            ssWeekDaysShort = ["Sö", "Må", "Ti", "Ons", "To", "Fre", "Lö"];
            cancelText = 'Ångra';
            todayText = 'Idag';
            break;
        case 'en': 
            ssMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            ssWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            ssWeekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            cancelText = 'Cancel';
            todayText = 'Today';
            break;
        default: 
            ssMonthNames = ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"];
            ssWeekDays = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
            ssWeekDaysShort = ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"];
            cancelText = 'Peruuta';
            todayText = 'Tänään';
            break;
    }
    
    // First day of week: monday
    datepickDefaults.firstDay = 1;
    // show calendar on focus of input
    datepickDefaults.showOnFocus = true;
    // locals
    datepickDefaults.monthNames = ssMonthNames;
    datepickDefaults.dayNames = ssWeekDays;
    datepickDefaults.dayNamesShort = ssWeekDaysShort;
    datepickDefaults.dayNamesMin = ssWeekDaysShort;
    datepickDefaults.clearText = cancelText;
    datepickDefaults.todayText = todayText;
    // finnish default date format
    datepickDefaults.dateFormat = 'dd.mm.yyyy',
    // Trigger change event of input when changing datepick value
    datepickDefaults.onSelect = function() {
        $(this).trigger('change');
    }

    window.datepickDefaults = datepickDefaults;

    jQuery.fn.wilmaDatepick = function() {
        if (browserIsMobile) {
            this.prop('readonly', true);
            this.addClass('date-mobile')
        }
        return this.datepick(datepickDefaults);
    };

    // --- StarSoft Spesific

	// enable datepicker
    jQuery(".date").not(':disabled').wilmaDatepick(datepickDefaults);
    /*
    jQuery(".date").datepick(datepickDefaults);
    jQuery(".date1").datepick(datepickDefaults);
    jQuery(".date2").datepick(datepickDefaults);
    jQuery(".date3").datepick(datepickDefaults);
    jQuery(".date4").datepick(datepickDefaults);
    jQuery(".date5").datepick(datepickDefaults);
    jQuery(".date6").datepick(datepickDefaults);
    jQuery(".date7").datepick(datepickDefaults);
    */
	
	// enable inline datepicker
	jQuery(".date-inline").datepick(datepickDefaults);
	jQuery(".date-inline1").datepick(datepickDefaults);
	jQuery(".date-inline2").datepick(datepickDefaults);
	jQuery(".date-inline3").datepick(datepickDefaults);
	jQuery(".date-inline4").datepick(datepickDefaults);
	jQuery(".date-inline5").datepick(datepickDefaults);
	jQuery(".date-inline6").datepick(datepickDefaults);
	jQuery(".date-inline7").datepick(datepickDefaults);
	
});
